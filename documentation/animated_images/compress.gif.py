# install
# -----------------------------------
# conda create python=3.8 --name gif
# conda activate gif
# pip install MoviePy
# pip install opencv-python

# run
# -----------------------------------
# python convert.gif.py

import os
import moviepy.editor as mp


# assign directory
directory = '.'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        f = str.split(f,'\\')[1]
        s = str.split(f,'.')
        if not os.path.exists('compressed'):
            os.mkdir('compressed')
        if (s[len(s)-1] == 'gif'):
            print('Source: ' + f + ' ', end='')
            clip = mp.VideoFileClip('./full_sized/' + f)
            # https://zulko.github.io/moviepy/ref/VideoClip/VideoClip.html
            print('')
            print(' before resize =', clip.size)
            clip = clip.resize(width=730, height=349)
            print('  after resize =', clip.size)
            clip.write_gif('./compressed/' + s[0] + '.gif', fuzz='50', opt='wu', colors='64', fps=None, loop=0, verbose=True)
            # clip.write_videofile('./' + s[0] + '.webm', codec="libvpx")
            print(' done')
