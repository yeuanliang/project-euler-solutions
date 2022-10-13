# python3
# coding:utf-8

# def cards_handle(cards_array):
#     cards_state=[[],[]]
#     for i in range(5):
#         if cards_array[0][3*i]=='T':
#             cards_state[0].append(10)
#         elif cards_array[0][3*i]=='J':
#             cards_state[0].append(11)
#         elif cards_array[0][3*i]=='Q':
#             cards_state[0].append(12)
#         elif cards_array[0][3*i]=='K':
#             cards_state[0].append(13)
#         elif cards_array[0][3*i]=='A':
#             cards_state[0].append(14)
#         else:
#             cards_state[0].append(int(cards_array[0][3*i]))
#         cards_state[0].sort()
#         cards_state[1].append(cards_array[0][3*i+1])
#     return cards_state
#
# hand=['8C TS KC 9H 4S 7D 2S 5D 3S AC']
# h1=[]
# h1.append(hand[0][:14])
# # result=cards_handle(h1)
# print(h1)

def resort_cards(cards):
    tmp=cards[0]
    if len(set(tmp))==2:
        if len(set(tmp[:2]))==len(set(tmp[-2:])) and tmp[2]!=tmp[3]:
            tmp.reverse()
            return tmp
        elif len(set(tmp[:2]))!=len(set(tmp[-2:])) and tmp[4]!=tmp[3]:
            tmp.reverse()
            return tmp
        else:
            return tmp
    elif len(set(tmp))==3:
        if len(set(tmp[:3]))==1:
            tmp[0],tmp[-2]=tmp[-2],tmp[0]
            tmp[1],tmp[-1]=tmp[-1],tmp[1]
            return tmp
        elif len(set(tmp[1:4]))==1:
            tmp[1],tmp[-1]=tmp[-1],tmp[1]
            return tmp
        elif len(set(tmp[:2]))==1 and len(set(tmp[-2:]))==1:
            tmp[0],tmp[2]=tmp[2],tmp[0]
            return tmp
        elif len(set(tmp[:2]))==1 and len(set(tmp[-2:]))==2:
            tmp[2],tmp[-1]=tmp[-1],tmp[2]
            tmp[0],tmp[2]=tmp[2],tmp[0]
            return tmp
        else:
            return tmp
    elif len(set(tmp))==4:
        if len(set(tmp[:2]))==1:
            tmp[0],tmp[2]=tmp[2],tmp[0]
            tmp[1],tmp[-2]=tmp[-2],tmp[1]
            tmp[2],tmp[-1]=tmp[-1],tmp[2]
            return tmp
        elif len(set(tmp[1:3]))==1:
            tmp[1],tmp[-2]=tmp[-2],tmp[1]
            tmp[2],tmp[-1]=tmp[-1],tmp[2]
            return tmp
        elif len(set(tmp[2:4]))==1:
            tmp[2],tmp[-1]=tmp[-1],tmp[2]
            return tmp
        else:
            return tmp
    else:
        return tmp

test=[[3,3,3,6,6],['H','D','S','H','C']]
r=resort_cards(test)
# tmp=test[0]
# if len(set(tmp))==2:
#     if len(set(tmp[:2]))==len(set(tmp[-2:])) and tmp[2]!=tmp[3]:
#         tmp.reverse()
#     elif len(set(tmp[:2]))!=len(set(tmp[-2:])) and tmp[4]!=tmp[3]:
#         tmp.reverse()

print(r)
