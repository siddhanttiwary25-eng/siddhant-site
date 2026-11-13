# Publishes the cut-outs into public/heads/. Run from the project root:  python3 tools/printlook.py
#  - heads-src/plates/*.png: real vintage illustrations (already old) -> published as they are.
#  - heads-src/clean/*.png:  modern photos -> given a fake vintage-print look first
#    (warm yellowed paper, softer ink, lifted blacks, slight colour misprint, grain).
# The cut edge (alpha) stays crisp.
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np, glob, os

def printlook(src, out, seed=7):
    im = Image.open(src).convert('RGBA'); alpha = im.split()[3]
    rgb = ImageEnhance.Color(im.convert('RGB')).enhance(0.95)
    rgb = ImageEnhance.Contrast(rgb).enhance(0.92)
    a = np.asarray(rgb).astype(np.float32)
    a = 34 + a * (232 - 34) / 255                    # ink on paper: no pure black or white
    a *= np.array([1.0, 0.94, 0.80])                 # warm, yellowed paper
    a[..., 0] = np.roll(a[..., 0], 2, axis=1)        # misregistration: red one way...
    a[..., 2] = np.roll(a[..., 2], -1, axis=0)       # ...blue the other
    a += np.random.default_rng(seed).normal(0, 13, a.shape[:2])[..., None]  # grain
    rgb = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.3))
    rgb = rgb.resize((rgb.width // 3, rgb.height // 3), Image.LANCZOS).resize(rgb.size, Image.BICUBIC)
    out_im = rgb.convert('RGBA'); out_im.putalpha(alpha)
    out_im.save(out, 'WEBP', quality=82, method=6)

if __name__ == '__main__':
    for src in sorted(glob.glob('heads-src/plates/*.png')):
        name = os.path.splitext(os.path.basename(src))[0]
        Image.open(src).convert('RGBA').save(f'public/heads/{name}.webp', 'WEBP', quality=84, method=6)
        print('published plate', name)
    for src in sorted(glob.glob('heads-src/clean/*.png')):
        name = os.path.splitext(os.path.basename(src))[0]
        printlook(src, f'public/heads/{name}.webp')
        print('printed', name)
