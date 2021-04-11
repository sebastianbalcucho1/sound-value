import pandas as pd
import os
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as stats

vinc=r"C:\Users\usuario\Google Drive\universidad\semillero\ruido experimento\data"
total=pd.DataFrame()
for i in os.listdir(vinc):
    print(i)
    if(i[-1]=="v"):
        pato=vinc+"//"+i
        df1=pd.read_csv(pato)
        df2=df1.fillna(method="bfill")
        df2=df1.fillna(method="ffill")



        total=total.append(df2)

def daniel():
    print(total.groupby("Hertz").mean()["slider_exp.response"])
    print(total.groupby("Hertz").mean()["slider_exp.rt"])
    ax = sns.boxplot(x='Hertz', y="slider_exp.response", data=total, color='#99c2a2')
    ax = sns.swarmplot(x='Hertz', y="slider_exp.response", data=total, color='#7d0013')
    plt.show()


def sebastian():


def ana():



daniel()
sebastian()
ana()