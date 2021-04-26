import pandas as pd
import os
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as stats
import lux
import statsmodels.api as sm
from statsmodels.formula.api import ols

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
    print("hola")
    total1=total
    total1["Hertz3"]=total.apply(lambda row: row["Hertz"] if row["volumen"]!=0 else 0,axis=1)
    print(total1.groupby("Hertz3").mean()["slider_exp.response"])
    print(total1.groupby("Hertz3").mean()["slider_exp.rt"])
    ax = sns.boxplot(x='Hertz3', y="slider_exp.response", data=total1, color='#99c2a2')
    ##ax = sns.swarmplot(x='Hertz', y="slider_exp.response", data=total, color='#7d0013')
    plt.show()

    total4=total1.groupby(["Hertz3", "Random"]).mean()["slider_exp.response"].reset_index()
    total1["resp"]=total1["slider_exp.response"]
    total1["hertz"]=total1["Hertz3"].apply(lambda x: str(x))
    model = ols('resp ~ hertz', data=total1).fit()
    anova_table = sm.stats.anova_lm(model, typ=2)
    print(anova_table)


def sebastianB():
    ...

def ana():
    print("hola")

def sebastianS():
    ...

daniel()
sebastianS()
sebastianB()
ana()
