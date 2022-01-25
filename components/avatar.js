import Image from 'next/image'


const ProfilePicture = () => (

  <Image
    src="/images/elisha.jpg" // Route of the image file
    height={100} // Desired size with correct aspect ratio
    width={100} // Desired size with correct aspect ratio
    alt="Your Name"
 
  />


)

export default ProfilePicture

