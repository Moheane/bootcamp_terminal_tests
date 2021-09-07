
module.exports =function yearsAgo(myday){
    const date2 = new Date();
    var now = date2.getFullYear();

    var results = now-myday;

   return (results)
};
