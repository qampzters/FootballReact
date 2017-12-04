let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">American Football</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Linebacker}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Linebacker</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Quarterback}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Quarterback</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Placekicker}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Placekicker</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Runningback}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Runningback</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  Alicorn:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">World of Myth</div>
              </div>
            </div>
            <center><img src={"img/imp.jpg"}/>
            <p>asdajslfkjsldkjadlk jalkjlksjdlkaj lkj lakjskldj </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Linebacker:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lineback</div>
              </div>
            </div>
            <center><img src={"img/L.jpg"} width={"100%"}/>
            <p>A linebacker (LB or backer) is a playing position in American football and Canadian football. Linebackers are members of the defensive team, and line up approximately three to five yards (4 m) behind the line of scrimmage, behind the defensive linemen, and therefore "back up the line."
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Quarterback:function(){
         let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Quarterback</div>
              </div>
            </div>
            <center><img src={"img/L1.jpg"} width={"100%"}/>
            <p>A quarterback (commonly abbreviated "QB") is a position in American and Canadian football. Quarterbacks are members of the offensive team and line up directly behind the offensive line.
 </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Placekicker:function(){
  let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Placekicker</div>
              </div>
            </div>
            <center><img src={"img/L2.jpg"} width={"100%"}/>
            <p>Placekicker, or simply kicker (PK or K), is the player in American and Canadian football who is responsible for the kicking duties of field goals and extra points.. </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    Runningback:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Runningback</div>
              </div>
            </div>
            <center><img src={"img/L3.jpg"} width={"100%"}/>
            <p>A running back (RB) is an American and Canadian football position, a member of the offensive backfield. ... There are usually one or two running backs on the field for a given play, depending on the offensive formation. </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
