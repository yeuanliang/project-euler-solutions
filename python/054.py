# python3
# coding:utf-8
import time
def poker_rank(cards):
    card_value_amount=len(set(cards[0]))
    card_suit_amount=len(set(cards[1]))
    if card_value_amount==5 and card_suit_amount>1:
        if cards[0]==[2,3,4,5,14]:
            return 5
        elif cards[0][4]-cards[0][0]>4:
            return 1
        else:
            return 5
    if card_value_amount==5 and card_suit_amount==1:
        if cards[0]==[2,3,4,5,14]:
            return 9
        elif cards[0][4]-cards[0][0]>4:
            return 6
        elif cards[0]==[10,11,12,13,14]:
            return 10
        else:
            return 9
    if card_value_amount==4:
        return 2
    if card_value_amount==3:
        if len(set(cards[0][:3]))==1 or len(set(cards[0][1:4]))==1 or len(set(cards[0][2:]))==1:
            return 4
        else:
            return 3
    if card_value_amount==2:
        if len(set(cards[0][:2]))==len(set(cards[0][-2:])):
            return 7
        else:
            return 8

def cards_handle(cards_array):
    cards_state=[[],[]]
    for i in range(5):
        if cards_array[3*i]=='T':
            cards_state[0].append(10)
        elif cards_array[3*i]=='J':
            cards_state[0].append(11)
        elif cards_array[3*i]=='Q':
            cards_state[0].append(12)
        elif cards_array[3*i]=='K':
            cards_state[0].append(13)
        elif cards_array[3*i]=='A':
            cards_state[0].append(14)
        else:
            cards_state[0].append(int(cards_array[3*i]))
        cards_state[0].sort()
        cards_state[1].append(cards_array[3*i+1])
    return cards_state

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

def compare_cards(hand):
    hand_1=hand[:14]
    hand_2=hand[15:]
    h1=cards_handle(hand_1)
    h2=cards_handle(hand_2)
    rank_1=poker_rank(h1)
    rank_2=poker_rank(h2)
    if rank_1>rank_2:
        return True
    elif rank_1==rank_2:
        while rank_1==1:
            if h1[0][4]>h2[0][4]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]>h2[0][3]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]>h2[0][2]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]==h2[0][2] and h1[0][1]>h2[0][1]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]==h2[0][2] and h1[0][1]==h2[0][1] and h1[0][0]>h2[0][0]:
                return True
            else:
                return False
        while rank_1==2:
            if resort_cards(h1)[-1]>resort_cards(h2)[-1]:
                return True
            elif resort_cards(h1)[-1]==resort_cards(h2)[-1] and resort_cards(h1)[2]>resort_cards(h2)[2]:
                return True
            elif resort_cards(h1)[-1]==resort_cards(h2)[-1] and resort_cards(h1)[2]==resort_cards(h2)[2] and resort_cards(h1)[1]>resort_cards(h2)[1]:
                return True
            elif resort_cards(h1)[-1]==resort_cards(h2)[-1] and resort_cards(h1)[2]==resort_cards(h2)[2] and resort_cards(h1)[1]==resort_cards(h2)[1] and resort_cards(h1)[0]>resort_cards(h2)[0]:
                return True
            else:
                return False
        while rank_1==3:
            if resort_cards(h1)[-1]>resort_cards(h2)[-1]:
                return True
            elif resort_cards(h1)[-1]==resort_cards(h2)[-1] and resort_cards(h1)[2]>resort_cards(h2)[2]:
                return True
            elif resort_cards(h1)[-1]==resort_cards(h2)[-1] and resort_cards(h1)[2]==resort_cards(h2)[2] and resort_cards(h1)[0]>resort_cards(h2)[0]:
                return True
            else:
                return False
        while rank_1==4:
            if resort_cards(h1)[-1]>resort_cards(h2)[-1]:
                return True
            else:
                return False
        while rank_1==5:
            if h1[0]==[2,3,4,5,14]:
                return False
            elif h1[0][4]>h2[0][4]:
                return True
            else:
                return False
        while rank_1==6:
            if h1[0][4]>h2[0][4]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]>h2[0][3]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]>h2[0][2]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]==h2[0][2] and h1[0][1]>h2[0][1]:
                return True
            elif h1[0][4]==h2[0][4] and h1[0][3]==h2[0][3] and h1[0][2]==h2[0][2] and h1[0][1]==h2[0][1] and h1[0][0]>h2[0][0]:
                return True
            else:
                return False
        while rank_1==7:
            if resort_cards(h1)[-1]>resort_cards(h2)[-1]:
                return True
            else:
                return False
        while rank_1==8:
            if resort_cards(h1)[-1]>resort_cards(h2)[-1]:
                return True
            else:
                return False
        while rank_1==9:
            if h1[0]==[2,3,4,5,14]:
                return False
            elif h1[0][4]>h2[0][4]:
                return True
            else:
                return False
    else:
        return False
start_time=time.time()
all_data=open('../assets/p054_poker.txt','r')
tmp=all_data.readlines()
poker_hands=[]
for i in range(len(tmp)):
    poker_hands.append(tmp[i][:29])
win=0
for poker_hand in poker_hands:
    if compare_cards(poker_hand):
        win=win+1
end_time=time.time()
print(win)
print("time:",end_time-start_time)
