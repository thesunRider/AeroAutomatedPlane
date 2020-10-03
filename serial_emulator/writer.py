#!/usr/bin/python
#made by elementx

import serial,sys, getopt,time,random

def main(argv): 
   try:
      opts, args = getopt.getopt(argv,"d:r:t:")
   except getopt.GetoptError as e:
      print(e)
      print('writer.py -d <device path> -r <rangestart-rangend> -t <delay before request 0.5>')
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print('writer.py -d <device path> -r <range> -t <delay before request>')
         sys.exit()
      elif opt in ("-d"):
         device = arg
      elif opt in ("-r"):
         rnge = arg
      elif opt in ("-t"):
         delay = arg

   ser = serial.Serial(device)
   splits = rnge.split(":")
   start = splits[0]
   end = splits[1]
   while True:
      numb = random.randint(int(start), int(end))
      bls = bytes(str(numb)+"\n", encoding='utf-8')
      print("Sending:" ,numb,bls)
      ser.write(bls)
      time.sleep(float(delay))


if __name__ == "__main__":
   main(sys.argv[1:])

