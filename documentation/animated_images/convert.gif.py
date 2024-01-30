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
        if (s[len(s)-1] == 'gif'):
            print(f, end='')
            clip = mp.VideoFileClip('./' + f)
            clip.write_videofile('./' + s[0] + '.mp4')
            print(' done')
