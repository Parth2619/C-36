class Game{
    constructor(){}
    getState(){
        var gamestateref = database.ref("gameState");
        gamestateref.on("value" , function (data){
            gameState = data.val();
        });
    };
update(state){
    database.ref("/").update({
        gameState: State
    });
}
start(){
    if(gameState === 0){
        form = new Form();
        form.display();
    }
}
}