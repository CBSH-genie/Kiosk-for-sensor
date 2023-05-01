function MenuBox({ menus }) {
  return (
    <div>
      {menus.map((menu, index) => (
        <div key={index}>{menu}</div>
      ))}
    </div>
  );
}
export default MenuBox;
