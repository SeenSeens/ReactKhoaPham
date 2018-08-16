var KhoaPham = React.createClass({
    laythongtin : function() {
        alert(this.props.children);
    },
  render: function() {
    return (
      <div>
        <h1 className="mauvang"> {this.props.ten} - {this.props.giangvien}</h1>
        <p>{this.props.children}</p>
        <button onClick={this.laythongtin}>Thong tin</button>
        <KhoaHoc/>
      </div>
    );
  }
});
var KhoaHoc = React.createClass({
  render: function() {
    return (
      <h3>Khoa hoc online</h3>
    )
  }
});
ReactDOM.render(
  <div>
    <KhoaPham ten="ReactJS" giangvien="Mr.Khoa"> Môn học ReactJS </KhoaPham>
    <KhoaPham ten="NodeJS" giangvien="Mr.Khoa"> Môn học NodeJS </KhoaPham>
  </div>,
  document.getElementById("root"));
