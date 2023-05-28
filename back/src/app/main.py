import pandas as pd
import json

from fastapi import FastAPI



with open('data/predictions.json', 'r') as f:
    preds = json.load(f)

default_list = pd.read_csv('data/groups.csv')['уникальный номер'].values[:30].tolist()
groups = pd.read_csv('data/groups.csv')

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/get_recommendations/")
async def read_item(user_id: int = 0, limit: int = 10):
    
    #default_list = [801357270, 801356857, 801351684, 801353683, 801352164]
    
    user_id = str(user_id)
    
    if user_id in preds:
        print(1)
        recs = preds[user_id]
    else:
        recs = default_list
        
    row_group = groups.loc[groups['уникальный номер'].isin(recs)].copy()
    
    
    ans = []
    for el in recs:
        row_group_el = row_group.loc[row_group['уникальный номер']==el].copy()
        row_group_el = row_group_el.fillna('')
        eldic = {}
        eldic['dir1'] = row_group_el['направление 1'].values[0]
        eldic['schedule_opened'] = row_group_el['расписание в активных периодах'].values[0]
        eldic['schedule_closed'] = row_group_el['расписание в закрытых периодах'].values[0]
        eldic['address'] = row_group_el['адрес площадки'].values[0]
        eldic['dir3'] = row_group_el['направление 3'].values[0]
        eldic['dir2'] = row_group_el['направление 2'].values[0]
        
        
        ans.append(eldic)
        

    return ans