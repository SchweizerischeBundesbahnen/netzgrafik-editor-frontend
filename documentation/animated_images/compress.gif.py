# install
# -----------------------------------
# conda create python=3.8 --name gif
# conda activate gif
# pip install MoviePy

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
        if not os.path.exists('output'):
            os.mkdir('output')
        if (s[len(s)-1] == 'gif'):
            print(f, end='')
            clip = mp.VideoFileClip('./' + f)
            # https://zulko.github.io/moviepy/ref/VideoClip/VideoClip.html
            clip.write_gif('./output/' + s[0] + '.gif', fuzz='0.5', opt='wu')
            clip.write_videofile('./' + s[0] + '.webm', codec="libvpx")
            print(' done')
