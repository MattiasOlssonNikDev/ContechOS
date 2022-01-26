const nodeDefs = {
    "nodeTypes": [
        {
            "nodeTypeId": 1,
            "title": "propType",
            "abbr": "pt"
        },
        {
            "nodeTypeId": 2,
            "title": "propKey",
            "abbr": "pk"
        },
        {
            "nodeTypeId": 3,
            "title": "propVal",
            "abbr": "pv"
        },
        {
            "nodeTypeId": 4,
            "title": "config",
            "abbr": "c"
        },
        {
            "nodeTypeId": 5,
            "title": "configRel",
            "abbr": "cr"
        },
        {
            "nodeTypeId": 6,
            "title": "data",
            "abbr": "d"
        },
        {
            "nodeTypeId": 7,
            "title": "dataRel",
            "abbr": "dr"
        }
    ],
    "nodeGroups": [
        {
            "nodeGroupId": 1,
            "title": "configs",
            "nodeTypes": [4, 5]
        },
        {
            "nodeGroupId": 2,
            "title": "datas",
            "nodeTypes": [6, 7]
        }, {
            "nodeGroupId": 3,
            "title": "props",
            "nodeTypes": [1, 2]
        }, {
            "nodeGroupId": 4,
            "title": "propVals",
            "nodeTypes": [3]
        }
    ]
};

export default nodeDefs;