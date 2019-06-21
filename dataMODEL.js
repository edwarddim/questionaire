{
    'id': "some sort of id",
    'displayName' : 'Basic esports knowledge',
    'sections': [
        {
            'displayName':"LOL",
            'questions':[
                {
                    'type':'freetext',
                    'text': "Discuss the suitabiltity of esports in HS"
                },
                {
                    'type': 'multi',
                    'text': 'In which genre would you classify LOL',
                    'options':[
                        {
                            'text':'FPS'
                        },
                        {
                            'text':'MOBA'
                        },
                        {
                            'text':'RTS'
                        }
                    ]
                }
            ]
        },
        {
            'displayName':'Esports(General)',
            'questions':[
                {
                    'type':'multi',
                    'text': 'Which spelling of esports is acceptable: 1. Esports, 2.e-sports',
                    'options':[
                        {
                            'text':'1'
                        },
                        {
                            'text':'1 and 2'
                        },
                        {
                            'text':'2'
                        },
                        {
                            'text':'None'
                        }
                    ]
                }
            ]
        }
    ]
};
{
    'id':"some sort of id",
    'by':{'name':"John Does", 'email':'john@gmail.com'},
    'at': "TIMESTAMP",
    'for': 'QUESIONAIRE ID',
    'sections':[
        {
            'answers':[
                {
                    'answer': "Excellent. Simple enough for kids to get into"
                },
                {
                    'answer': '1' //0-based index
                }
            ]
        },
        // SEPARATE OBJECT BY SECTION
        {
            'answers':[
                {
                    'answer':'3'  // 0-based index
                }
            ]
        }
    ]
};