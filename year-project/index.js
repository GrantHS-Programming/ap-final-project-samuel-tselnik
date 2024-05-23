let family = new FamilyTree(document.getElementById("tree"), {
    menu: {
        json: { text: "Export JSON" },
        importJSON: { text: "Import JSON", icon: FamilyTree.icon.json(24, 24, 'red'), onClick: importJSONHandler},
    },
    nodeTreeMenu: true,
    nodeBinding: {
        field_0: "name"
    },
    /*nodes: [
        { id: 1, mid: 3, fid: 4, name: "Samuel Tselnik", gender: "male" },
        { id: 2, mid: 3, fid: 4, name: "Ezra Tselnik", gender: "male" },
        { id: 3, pids: [4], name: "Christina Tselnik", gender: "female" },
        { id: 4, pids: [3], name: "Marat Tselnik", gender: "male"} 
    ]*/
});

function importJSONHandler(){
    family.importJSON();
}

/*family.onUpdateNote((args) => {
    //post the data from args to your server
});

family.editUI.on('element-btn-click', function (sender, args) {
    console.log("Hasg");
    FamilyTree.fileUploadDialog(function (file) {
        let formData = new FormData();
        formData.append('file', file);
        alert('upload the file');
        console.log(args);
    })
});*/
//import treeJSON from './FamilyTree.json';
family.load([
    {"id":1,"mid":3,"fid":4,"name":"Samuel Tselnik","gender":"male"},
    {"id":2,"mid":3,"fid":4,"name":"Ezra Tselnik","gender":"male"},
    {"id":3,"pids":[4],"name":"Christina Tselnik","gender":"female"},
    {"id":4,"pids":[3],"name":"Marat Tselnik","gender":"male"}
]);