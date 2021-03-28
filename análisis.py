import pandas as pd
import os

vinc=r"C:\Users\usuario\Google Drive\universidad\semillero\ruido experimento\data"
total=pd.DataFrame()
for i in os.listdir(vinc):
    print(i)
    if(i[-1]=="v"):
        pato=vinc+"//"+i
        df1=pd.read_csv(pato)
        df2=df1.fillna(method="bfill")




        total=total.append(df2)


