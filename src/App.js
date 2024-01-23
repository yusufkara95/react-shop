import Directory from "./components/directory/directory.component";

import "./categories.style.scss";

const App = () => {
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
      imageUrl: "https://images.pexels.com/photos/18639550/pexels-photo-18639550/free-photo-of-mann-paar-frau-bett.jpeg",
    },
    {
      id: 5,
      title: "Herren",
      imageUrl: "https://images.pexels.com/photos/18639550/pexels-photo-18639550/free-photo-of-mann-paar-frau-bett.jpeg",
    },
  ];

  return (
    <Directory categories={categories} />
  );
};

export default App;
