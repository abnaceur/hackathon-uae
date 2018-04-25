import sys
import csv
import os

def     parser(filename):
    try:
        f = open(filename, 'r', encoding='windows-1256')
    except:
        print("file %s does not exists" % filename)
        return 0
    lines = f.readlines()
    f.close()
    return lines

def     to_csv(lines, output):
    writer = csv.writer(output, 
            delimiter = ';', 
            quotechar='"', 
            quoting=csv.QUOTE_NONE)
    for l in lines:
        words = l.split(" ")
        words = [w.strip() for w in words if w != '']
        writer.writerow(words)

def     clean():
    text = input("remove file dict_saudi.csv? [yes/no] ")
    if (text == 'yes'):
        os.remove('dict_saudi.csv')
        print("removed file")

def     main():
    if len(sys.argv) != 2:
        print("bad arguments")
        return
    if sys.argv[1] == "clean":
        clean()
        return
    filename = sys.argv[1]
    lines = parser(filename)
    if (lines == 0):
        return
    output_file = open('dict_saudi.csv', 'w')
    to_csv(lines, output_file)
    output_file.close()

if __name__ == "__main__":
    main()
