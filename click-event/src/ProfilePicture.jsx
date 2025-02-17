function ProfilePicture() {
  const image_url = "./src/assets/react.svg";
  const handleClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handleClick(e)} src={image_url}></img>;
}
export default ProfilePicture;
