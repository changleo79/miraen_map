// 가맹점 데이터
// 엑셀 파일에서 자동 생성됨

const franchiseData = {
    yongin: [
    {
        "name": "용인로운학원",
        "address": "경기 용인시 기흥구 중부대로788번길 13 (상하동, 수원동마을쌍용스윗닷홈아파트) 상가동 3층 로운학원",
        "director": "조상희",
        "members": 153,
        "phone": "010-3658-0370",
        "zipCode": "17077",
        "contractDate": "2008-12-19"
    },
    {
        "name": "용인파머스미래엔수학학원",
        "address": "경기 용인시 처인구 고림로 92 (고림동) 2층",
        "director": "성기욱",
        "members": 151,
        "phone": "010-3313-7987",
        "zipCode": "17151",
        "contractDate": "2023-06-01"
    },
    {
        "name": "용인한숲학원",
        "address": "경기 용인시 처인구 남사면 한숲로 54 (아곡리) 아곡프라자401호 삼성영어한솔수학학원",
        "director": "전소영",
        "members": 130,
        "phone": "010-2940-0944",
        "zipCode": "17117",
        "contractDate": "2016-07-29"
    },
    {
        "name": "미래엔수학 브이매쓰학원",
        "address": "경기 용인시 기흥구 동백중앙로 358-8 (동백동, 백현프라자) 403호",
        "director": "황상희",
        "members": 122,
        "phone": "010-2901-3220",
        "zipCode": "17003",
        "contractDate": "2025-09-24"
    },
    {
        "name": "용인봄봄수학",
        "address": "경기 용인시 수지구 성복동 129-1 206호 봄봄수학",
        "director": "김유정",
        "members": 102,
        "phone": "010-9240-8246",
        "zipCode": "16851",
        "contractDate": "2023-02-03"
    },
    {
        "name": "용인태영학원",
        "address": "경기 용인시 처인구 이동읍 백옥대로621번길 3 (천리, 우리들의원) 301호 한솔플러스수학학원",
        "director": "김준석",
        "members": 100,
        "phone": "010-4765-9658",
        "zipCode": "17128",
        "contractDate": "2021-03-30"
    },
    {
        "name": "용인미래엔수학 윙매쓰학원",
        "address": "경기 용인시 수지구 손곡로 107 (동천동, 대영프라자) 202호",
        "director": "유정윤",
        "members": 100,
        "phone": "010-6650-0872",
        "zipCode": "16822",
        "contractDate": "2025-09-24"
    },
    {
        "name": "용인교동프라임학원",
        "address": "경기 용인시 기흥구 마북로 124-9 (마북동, 교동마을현대홈타운) 2층 202호 프라임수학학원",
        "director": "박선숙",
        "members": 73,
        "phone": "010-9828-9810",
        "zipCode": "16910",
        "contractDate": "2023-07-31"
    },
    {
        "name": "용인원셀수학학원",
        "address": "경기 용인시 기흥구 죽전로 47 (보정동, 웰빙타운) 702호",
        "director": "나경환",
        "members": 70,
        "phone": "010-8642-6753",
        "zipCode": "16898",
        "contractDate": "2024-03-27"
    },
    {
        "name": "용인루트엠학원",
        "address": "경기 용인시 기흥구 동백죽전대로527번길 98-2 (중동, 헌암프라자) 4층 루트엠학원",
        "director": "조현겸",
        "members": 63,
        "phone": "010-3061-7448",
        "zipCode": "16990",
        "contractDate": "2021-02-25"
    },
    {
        "name": "용인흥덕학원 ",
        "address": "경기 용인시 기흥구 흥덕2로 115 (영덕동, 미래도프라자) 3층",
        "director": "이희종",
        "members": 62,
        "phone": "010-2538-4958",
        "zipCode": "16953",
        "contractDate": "2021-04-30"
    },
    {
        "name": "용인이룸수학학원",
        "address": "경기 용인시 수지구 신봉동 82-4 3층",
        "director": "박병준",
        "members": 52,
        "phone": "010-9211-0442",
        "zipCode": "16814",
        "contractDate": "2019-08-22"
    },
    {
        "name": "용인 이김수학학원",
        "address": "경기 용인시 기흥구 한보라1로 14 (보라동, 베스트프라자) 203호",
        "director": "이주현",
        "members": 52,
        "phone": "010-9276-8879",
        "zipCode": "17080",
        "contractDate": "2021-10-26"
    },
    {
        "name": "용인정평미래엔수학학원",
        "address": "경기 용인시 수지구 풍덕천동 1047-3 5층 삼성영어미래엔수학",
        "director": "김혜정",
        "members": 50,
        "phone": "010-5311-7508",
        "zipCode": "16844",
        "contractDate": "2024-08-22"
    },
    {
        "name": "용인성복효자교실",
        "address": "경기 용인시 수지구 성복동 276-1 110호",
        "director": "김혜정",
        "members": 50,
        "phone": "010-5311-7508",
        "zipCode": "16853",
        "contractDate": "2023-02-27"
    },
    {
        "name": "용인리딩매쓰학원",
        "address": "경기 용인시 기흥구 구성3로28번길 16 (청덕동, 우성프라자) 401호 RM리딩매쓰학원",
        "director": "손영서",
        "members": 50,
        "phone": "010-6659-0052",
        "zipCode": "16892",
        "contractDate": "2019-03-27"
    },
    {
        "name": "용인동백이레교실",
        "address": "경기 용인시 기흥구 동백평촌로 70 (동백동, 호수마을상록롯데캐슬) 1005ㅡ201",
        "director": "이윤정",
        "members": 50,
        "phone": "010-9284-3003",
        "zipCode": "17002",
        "contractDate": "2024-03-11"
    },
    {
        "name": "용인나곡효성교실",
        "address": "경기 용인시 기흥구 사은로84번길 10 (보라동, 용인보라 효성해링턴플레이스) 상가A동 205호 생각하는수학/한솔수학",
        "director": "설보경",
        "members": 50,
        "phone": "010-2389-3560",
        "zipCode": "17079",
        "contractDate": "2019-11-21"
    },
    {
        "name": "용인고탑학원",
        "address": "경기 용인시 처인구 포곡읍 포곡로108번길 16 (둔전리, 라데팡스2차) 둔전리 150-1 번지 라데팡스 301호 고려대 탑수학",
        "director": "이은영",
        "members": 50,
        "phone": "010-5195-7395",
        "zipCode": "17027",
        "contractDate": "2011-10-14"
    },
    {
        "name": "용인갈곡초교실",
        "address": "경기 용인시 기흥구 강남동로 54 (구갈동, 강남마을7단지계룡리슈빌아파트) 704동 304호",
        "director": "민숙희",
        "members": 50,
        "phone": "010-5434-0131",
        "zipCode": "16978",
        "contractDate": "2023-11-01"
    },
    {
        "name": "미래엔영어수학해봄학원",
        "address": "경기 용인시 기흥구 보라동 570 상가동 303호",
        "director": "김미진",
        "members": 50,
        "phone": "010-8024-0628",
        "zipCode": "17079",
        "contractDate": "2025-04-30"
    },
    {
        "name": "용인기흥리더스영수학원",
        "address": "경기 용인시 기흥구 기흥역로58번길 10 (구갈동, 기흥역 센트럴 푸르지오) 상가 3B 105호,106호",
        "director": "박경애",
        "members": 41,
        "phone": "010-9027-6623",
        "zipCode": "17066",
        "contractDate": "2024-08-22"
    },
    {
        "name": "삼성영어미래엔수학수지상현학원",
        "address": "경기 용인시 수지구 상현동 1214 2층 학 삼성영어미래엔수학",
        "director": "김진희",
        "members": 41,
        "phone": "010-2633-7261",
        "zipCode": "16930",
        "contractDate": "2023-05-23"
    },
    {
        "name": "용인죽전이엠수학학원",
        "address": "경기 용인시 수지구 죽전동 1188-5 에이스프라자 604호",
        "director": "강민정",
        "members": 40,
        "phone": "010-3603-7120",
        "zipCode": "16876",
        "contractDate": "2024-06-17"
    },
    {
        "name": "용인동백서샘교실",
        "address": "경기 용인시 기흥구 중동 853-2 제일프라자 5층 503호 미래엔서샘수학학원",
        "director": "서혜실",
        "members": 37,
        "phone": "010-9266-3228",
        "zipCode": "17006",
        "contractDate": "2020-01-02"
    },
    {
        "name": "용인고림양우교실",
        "address": "경기 용인시 처인구 고림동 1005 107동 901호",
        "director": "한순영",
        "members": 35,
        "phone": "010-2726-7730",
        "zipCode": "17148",
        "contractDate": "2023-10-31"
    },
    {
        "name": "용인보라늘푸름학원",
        "address": "경기 용인시 기흥구 한보라1로 42-4 (보라동, 수&원빌딩) 401호",
        "director": "최윤정",
        "members": 34,
        "phone": "010-4929-1107",
        "zipCode": "17080",
        "contractDate": "2024-05-22"
    },
    {
        "name": "수지최상학원",
        "address": "경기 용인시 수지구 문정로 46 (풍덕천동, 한길타운) 201호 미래엔수학",
        "director": "최원숙",
        "members": 28,
        "phone": "010-8633-0087",
        "zipCode": "16837",
        "contractDate": "2024-12-26"
    },
    {
        "name": "용인죽전탑글로벌교실",
        "address": "경기 용인시 수지구 대지로 58 (죽전동, 선진포리스트) 나동 304호",
        "director": "엄대흠",
        "members": 25,
        "phone": "010-2335-8552",
        "zipCode": "16873",
        "contractDate": "2017-05-18"
    },
    {
        "name": "용인신릉세움수학",
        "address": "경기 용인시 기흥구 새천년로 38 (신갈동, 파크시엘) 가상가동 104호",
        "director": "노지현",
        "members": 24,
        "phone": "010-4708-5691",
        "zipCode": "16960",
        "contractDate": "2024-10-31"
    },
    {
        "name": "용인한얼ELS학원",
        "address": "경기 용인시 기흥구 기흥역로58번길 78 (구갈동, 기흥역 더샵) 더샾오피스텔109호",
        "director": "고소연",
        "members": 23,
        "phone": "010-2336-0918",
        "zipCode": "17066",
        "contractDate": "2023-09-12"
    },
    {
        "name": "용인생각in수학",
        "address": "경기 용인시 수지구 탄천상로 19 (죽전동, 중앙프라자) 203호 미래엔생각in수학 ",
        "director": "박수정",
        "members": 23,
        "phone": "010-4094-6010",
        "zipCode": "16866",
        "contractDate": "2024-06-03"
    },
    {
        "name": "용인새빛교실",
        "address": "경기 용인시 수지구 광교마을로 91 (상현동, 신우 프라자) 301호",
        "director": "정우성",
        "members": 23,
        "phone": "010-9871-2367",
        "zipCode": "16942",
        "contractDate": "2022-12-06"
    },
    {
        "name": "용인청곡미래엔수학",
        "address": "경기 용인시 기흥구 덕영대로 2063 (영덕동, 기흥 푸르지오 포레피스)  상가 3층 301호 청곡미래엔수학 영어학원",
        "director": "송혜란",
        "members": 20,
        "phone": "010-6358-1177",
        "zipCode": "17095",
        "contractDate": "2024-12-02"
    },
    {
        "name": "용인양지지니플러스학원",
        "address": "경기 용인시 처인구 양지면 양지리 590-1 지니Plus 2층",
        "director": "윤건이",
        "members": 20,
        "phone": "010-7329-3651",
        "zipCode": "17158",
        "contractDate": "2024-09-26"
    },
    {
        "name": "용인서원교실",
        "address": "경기 용인시 수지구 상현동 830 302호",
        "director": "김동건",
        "members": 20,
        "phone": "010-4196-0032",
        "zipCode": "16939",
        "contractDate": "2017-07-24"
    },
    {
        "name": "용인 풍천 미래엔수학",
        "address": "경기 용인시 수지구 진산로 106 (풍덕천동, 훼미리빌딩)  404호",
        "director": "이윤진",
        "members": 20,
        "phone": "010-5966-3580",
        "zipCode": "16923",
        "contractDate": "2024-09-30"
    },
    {
        "name": "용인 위너스영수학원(모현캠퍼스)",
        "address": "경기 용인시 처인구 모현읍 백옥대로2366번길 7-1 (왕산리) 2층 위너스영수학원",
        "director": "KANGEUNJUNG",
        "members": 20,
        "phone": "010-5631-0690",
        "zipCode": "17035",
        "contractDate": "2021-02-26"
    },
    {
        "name": "용인서희스타힐즈교실",
        "address": "경기 용인시 처인구 낙은로 100-31 (역북동, 서희스타힐스 포레스트) 209동 2102호",
        "director": "김성자",
        "members": 19,
        "phone": "010-9059-2534",
        "zipCode": "17045",
        "contractDate": "2023-05-02"
    },
    {
        "name": "용인대일최강학원",
        "address": "경기 용인시 수지구 죽전동 1259-3 201호",
        "director": "최정혜",
        "members": 19,
        "phone": "010-3397-4767",
        "zipCode": "16874",
        "contractDate": "2024-08-19"
    },
    {
        "name": "용인양현교실",
        "address": "경기 용인시 기흥구 관곡로 15 (신갈동, 양현마을풍림신안아파트) 상가동 제 1층 제  101호",
        "director": "고진경",
        "members": 17,
        "phone": "010-2657-9550",
        "zipCode": "16962",
        "contractDate": "2021-03-23"
    },
    {
        "name": "용인성서미래엔수학",
        "address": "경기 용인시 수지구 성복2로 230 (성복동) 5층 미래엔수학리드인학원",
        "director": "안현숙",
        "members": 14,
        "phone": "010-7768-1342",
        "zipCode": "16807",
        "contractDate": "2024-10-08"
    },
    {
        "name": "용인새천년교실",
        "address": "경기 용인시 기흥구 새천년로26번길 2 (신갈동, 센타프라자) 301호",
        "director": "황미경",
        "members": 14,
        "phone": "010-5046-0324",
        "zipCode": "16959",
        "contractDate": "2009-11-16"
    },
    {
        "name": "수지꿈터수학학원",
        "address": "경기 용인시 수지구 성복2로76번길 26-4 (성복동, 신봉샤르망2) 4층 꿈터수학학원",
        "director": "김수옥",
        "members": 14,
        "phone": "010-2952-1595",
        "zipCode": "16848",
        "contractDate": "2025-11-06"
    },
    {
        "name": "용인성산초교실",
        "address": "경기 용인시 처인구 백옥대로1380번길 6 (유방동) 우송빌딩 3층",
        "director": "이옥순",
        "members": 13,
        "phone": "010-6586-3543",
        "zipCode": "17041",
        "contractDate": "2021-03-09"
    },
    {
        "name": "용인보라1교실",
        "address": "경기 용인시 기흥구 한보라1로 56 (보라동, 메디프라자) 한보라1로 56 4층 402호(메디프라자)",
        "director": "박찬실",
        "members": 13,
        "phone": "010-4465-0209",
        "zipCode": "17080",
        "contractDate": "2015-06-16"
    },
    {
        "name": "용인수학의봄교실",
        "address": "경기 용인시 수지구 신봉3로 1 (신봉동, 진성프라자2) 704호",
        "director": "박효선",
        "members": 12,
        "phone": "010-4380-8122",
        "zipCode": "16811",
        "contractDate": "2022-12-30"
    },
    {
        "name": "미래엔수학 더그릿학원",
        "address": "경기 용인시 수지구 동천로 137 (동천동, 동천프라자) 3층 305호",
        "director": "차지연",
        "members": 11,
        "phone": "010-2525-9970",
        "zipCode": "16822",
        "contractDate": "2025-10-31"
    },
    {
        "name": "용인 역북함박교실",
        "address": "경기 용인시 처인구 명지로40번길 35-16 (역북동, 역북푸르지오) 102-1602 ",
        "director": "채송희",
        "members": 10,
        "phone": "010-4125-2710",
        "zipCode": "17056",
        "contractDate": "2025-05-20"
    },
    {
        "name": "용인상갈교실",
        "address": "경기 용인시 기흥구 금화로 101 (상갈동, 그린빌프라자) 5층 미래엔수학",
        "director": "조성란",
        "members": 9,
        "phone": "010-8030-6430",
        "zipCode": "17073",
        "contractDate": "2024-05-27"
    },
    {
        "name": "용인서룡초미래엔수학",
        "address": "경기 용인시 처인구 역북동 418-12 101호 미래엔수학",
        "director": "김영민",
        "members": 8,
        "phone": "010-5640-1944",
        "zipCode": "17047",
        "contractDate": "2025-07-15"
    },
    {
        "name": "용인동천혜윰미래엔수학",
        "address": "경기 용인시 수지구 동천로 37 (동천동) 501호",
        "director": "홍성아",
        "members": 7,
        "phone": "010-6569-1946",
        "zipCode": "16826",
        "contractDate": "2024-11-18"
    },
    {
        "name": "용인대일교실",
        "address": "경기 용인시 수지구 푸른솔로 95 (죽전동) 용인대일교실",
        "director": "김현숙",
        "members": 7,
        "phone": "010-2351-8332",
        "zipCode": "16873",
        "contractDate": "2023-01-25"
    },
    {
        "name": "용인신봉미래엔학원",
        "address": "경기 용인시 수지구 신봉동 925 웰스톤시티 3층 302호",
        "director": "이현순",
        "members": 5,
        "phone": "010-4307-7461",
        "zipCode": "16813",
        "contractDate": "2024-03-04"
    },
    {
        "name": "용인미래엔수학베스트교실",
        "address": "경기 용인시 수지구 대지로 125 (죽전동, 새터마을 모아미래도)  상가 203호",
        "director": "최명이",
        "members": 3,
        "phone": "010-8309-9529",
        "zipCode": "16881",
        "contractDate": "2025-02-20"
    },
    {
        "name": "용인동백혜윰학원",
        "address": "경기 용인시 기흥구 중동 860 서해그랑블아파트상가 201호",
        "director": "정형랑",
        "members": 3,
        "phone": "010-5081-4895",
        "zipCode": "17007",
        "contractDate": "2025-06-05"
    },
    {
        "name": "용인서농초교실",
        "address": "경기 용인시 기흥구 서천동로21번길 6-1 (서천동) 1층",
        "director": "박기옥",
        "members": 2,
        "phone": "010-4717-7865",
        "zipCode": "17106",
        "contractDate": "2025-09-02"
    }
],
    gangdong: [
    {
        "name": "하남단샘최쌤학원",
        "address": "경기 하남시 감일백제로180번길 20 (감이동, 반도 유스퀘어)  반도 유스퀘어 606호~7호",
        "director": "최미헌",
        "members": 155,
        "phone": "010-6295-3009",
        "zipCode": "12999",
        "contractDate": "2022-11-30"
    },
    {
        "name": "강동세움수학학원",
        "address": "서울 강동구 성안로 158-1 (길동) 3층 세움수학학원",
        "director": "박은희",
        "members": 59,
        "phone": "010-2270-4485",
        "zipCode": "05354",
        "contractDate": "2023-07-24"
    },
    {
        "name": "강남압구정탑학원",
        "address": "서울 강남구 압구정로18길 5 (신사동) 3층",
        "director": "박효진",
        "members": 51,
        "phone": "010-5404-3185",
        "zipCode": "06031",
        "contractDate": "2025-04-15"
    },
    {
        "name": "하남감일메타수학",
        "address": "경기 하남시 감이동 525-8 준메디타워 304호",
        "director": "한윤정",
        "members": 50,
        "phone": "010-7191-2433",
        "zipCode": "13004",
        "contractDate": "2024-08-08"
    },
    {
        "name": "위례리더수학",
        "address": "경기 하남시 위례학암로14번길 31 (학암동, 경서타워2) 503호 미래엔수학",
        "director": "조현영",
        "members": 50,
        "phone": "010-4788-2584",
        "zipCode": "13010",
        "contractDate": "2023-08-31"
    },
    {
        "name": "강남자곡에반아카데미",
        "address": "서울 강남구 밤고개로 227 (자곡동, 훼미리타운) 에반아카데미학원",
        "director": "이주하",
        "members": 38,
        "phone": "010-2711-9911",
        "zipCode": "06370",
        "contractDate": "2024-06-13"
    },
    {
        "name": "강동대명미래엔수학",
        "address": "서울 강동구 명일동 88 미래엔수학 강동대명",
        "director": "임민아",
        "members": 33,
        "phone": "010-8958-0058",
        "zipCode": "05271",
        "contractDate": "2024-07-30"
    },
    {
        "name": "송파미래엔헬리오수학",
        "address": "서울 송파구 송파대로 345 (가락동, 헬리오시티) 3002호",
        "director": "김혜영",
        "members": 30,
        "phone": "010-4478-2588",
        "zipCode": "05698",
        "contractDate": "2024-06-03"
    },
    {
        "name": "강동성일미래엔수학",
        "address": "서울 강동구 성안로7길 55 (성내동) 202 미래엔수학",
        "director": "임효진",
        "members": 30,
        "phone": "010-3782-8323",
        "zipCode": "05396",
        "contractDate": "2024-10-30"
    },
    {
        "name": "세곡리엔교실",
        "address": "서울 강남구 헌릉로570길 34 (세곡동, 리엔파크프라자) 리엔파크프라자 5층 한솔플러스수학",
        "director": "허선미",
        "members": 26,
        "phone": "010-5704-3279",
        "zipCode": "06365",
        "contractDate": "2019-03-14"
    },
    {
        "name": "송파거여미래엔영어수학",
        "address": "서울 송파구 거여동 554-3 3층 미래엔영어수학",
        "director": "이현호",
        "members": 24,
        "phone": "010-8876-5446",
        "zipCode": "05772",
        "contractDate": "2024-02-14"
    },
    {
        "name": "송파잠전엘리스카이학원",
        "address": "서울 송파구 올림픽로12길 54 (잠실동) 301호",
        "director": "고임영",
        "members": 21,
        "phone": "010-3232-3688",
        "zipCode": "05569",
        "contractDate": "2024-08-21"
    },
    {
        "name": "송파거원미래엔수학",
        "address": "서울 송파구 양산로2길 38 (거여동, 거여6단지아파트) 6단지상가2층 203.4호",
        "director": "윤선주",
        "members": 20,
        "phone": "010-8550-6130",
        "zipCode": "05789",
        "contractDate": "2024-12-20"
    },
    {
        "name": "강남개포해피클래스학원",
        "address": "서울 강남구 선릉로 28 (개포동, 일영빌딩) 2층 해피클래스학원",
        "director": "신혜정",
        "members": 20,
        "phone": "010-3933-4186",
        "zipCode": "06325",
        "contractDate": "2025-06-05"
    },
    {
        "name": "송파삼전미래엔수학학원",
        "address": "서울 송파구 백제고분로28길 20 (삼전동)  3층",
        "director": "허상희",
        "members": 18,
        "phone": "010-4463-0153",
        "zipCode": "05591",
        "contractDate": "2024-08-23"
    },
    {
        "name": "감일미래엔상상학원",
        "address": "경기 하남시 감일동 530-2 J&B프라자 301호",
        "director": "김랑위",
        "members": 17,
        "phone": "010-5496-5664",
        "zipCode": "12996",
        "contractDate": "2024-05-13"
    },
    {
        "name": "서초양재제니학원",
        "address": "서울 서초구 동산로 60 (양재동, 화성빌딩) 3층,4층",
        "director": "이은진",
        "members": 15,
        "phone": "010-4853-4460",
        "zipCode": "06784",
        "contractDate": "2024-06-03"
    },
    {
        "name": "강동명일미래엔수학학원",
        "address": "서울 강동구 암사동 413-3 상가401호 원더잉글리시 미래엔수학",
        "director": "박재윤",
        "members": 13,
        "phone": "010-5800-8904",
        "zipCode": "05256",
        "contractDate": "2024-11-07"
    },
    {
        "name": "강동고덕어반브릿지교실",
        "address": "서울 강동구 고덕로98길 75 (상일동, e편한세상 고덕 어반브릿지) 401호 ",
        "director": "박지영",
        "members": 12,
        "phone": "010-2716-8923",
        "zipCode": "05416",
        "contractDate": "2025-11-04"
    },
    {
        "name": "고래힐미래엔수학",
        "address": "서울 강동구 아리수로50길 50 (고덕동, 래미안힐스테이트고덕) 상가동 214 ,241호",
        "director": "이금순",
        "members": 11,
        "phone": "010-2643-9905",
        "zipCode": "05229",
        "contractDate": "2023-07-14"
    },
    {
        "name": "강일미아쌤수학",
        "address": "서울 강동구 아리수로93나길 54 (강일동, 경서프라자) 201호",
        "director": "이혜미",
        "members": 11,
        "phone": "010-9540-4512",
        "zipCode": "05415",
        "contractDate": "2025-07-01"
    },
    {
        "name": "송파강동교실",
        "address": "서울 강동구 상암로12길 20 (천호동, 유원아파트) 상가 3층 302호",
        "director": "장하림",
        "members": 8,
        "phone": "010-7932-5596",
        "zipCode": "05318",
        "contractDate": "2022-01-03"
    },
    {
        "name": "송파가락미래엔수학",
        "address": "서울 송파구 동남로 211 (가락동) 4층",
        "director": "최이나",
        "members": 7,
        "phone": "010-4946-0292",
        "zipCode": "05820",
        "contractDate": "2025-07-25"
    },
    {
        "name": "하남미사역미래엔수학",
        "address": "경기 하남시 미사강변동로84번길 39 (망월동, 에코타워) 7층 706호",
        "director": "류혜응",
        "members": 5,
        "phone": "010-3787-0302",
        "zipCode": "12912",
        "contractDate": "2025-05-08"
    },
    {
        "name": "강동상일엠수학",
        "address": "서울 강동구 상일로12길 99 (상일동) 리엔프라자2층 202호 엠수학",
        "director": "이경수",
        "members": 5,
        "phone": "010-2009-6928",
        "zipCode": "05285",
        "contractDate": "2025-08-01"
    },
    {
        "name": "생각수학교실",
        "address": "서울 강동구 고덕로 210 (명일동, 삼익그린맨션) 503-803",
        "director": "이주비",
        "members": 4,
        "phone": "010-8777-0269",
        "zipCode": "05267",
        "contractDate": "2019-04-08"
    },
    {
        "name": "강동고일초교실",
        "address": "서울 강동구 상일동 193 102호",
        "director": "조수진",
        "members": 4,
        "phone": "010-4589-7746",
        "zipCode": "05282",
        "contractDate": "2025-07-04"
    },
    {
        "name": "송파쌍용미래엔수학학원",
        "address": "서울 송파구 동남로 189 (가락동, 가락쌍용아파트) 쌍용프라자 408호",
        "director": "김은주",
        "members": 0,
        "phone": "010-2439-3975",
        "zipCode": "05823",
        "contractDate": "2025-09-11"
    }
]
};

// 초등학교 데이터는 네이버 지도에서 자동으로 검색하여 표시됩니다
// 별도의 데이터 입력이 필요 없습니다
const schoolData = {
    yongin: [],
    gangdong: []
};

// 학원상권 데이터 (주요 학원 밀집 지역)
const academyAreaData = {
    yongin: [],
    gangdong: []
};
