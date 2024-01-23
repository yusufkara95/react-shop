import { Outlet } from "react-router-dom";
import Directory from "../..//components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hüte",
      imageUrl: "https://images.pexels.com/photos/4487515/pexels-photo-4487515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Jacken",
      imageUrl: "https://images.pexels.com/photos/6220658/pexels-photo-6220658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "T-Shirt",
      imageUrl: "https://images.pexels.com/photos/9491361/pexels-photo-9491361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Damen",
      imageUrl: "https://images.pexels.com/photos/6667921/pexels-photo-6667921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Herren",
      imageUrl: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div>
        <Outlet />
        <Directory categories={categories} />
    </div>
  );
};

export default Home;
