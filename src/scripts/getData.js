const getData = async (page) => {
  try {
    const data = await fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
