class movie 
{
    constructor(title,studio,rating='PG')
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

getPG(arr)
{
    let data=arr.filter( function(d){
        if(d.rating =="PG")
        return d.title;
        else return false
    });

    console.log(data);
}
getmovies()
{
    console.log(`
    Title: ${this.title}
    Studio: ${this.studio}
    rating: ${this.rating}
    `);
}

}
let mov1=new movie("casino royale","fox studio","PG13");
let mov2=new movie("spiderman","marvel studio","PG");
let mov3=new movie("jumanji","columbia studio","R");
let mov4=new movie("ironman","marvel studio","PG");
let mov5=new movie("venom","sony studio","PG");

const arr=[mov1,mov2,mov3,mov4,mov5];
let a=mov1.getPG(arr);
mov1.getmovies();