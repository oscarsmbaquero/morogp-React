const users = [
  { email: "oscarsmb@gmail.com", password: "0810", name: "Oscar" },
  { email: "alberto@test.com", password: "456", name: "Alberto" },
  { email: "alvaro@test.com", password: "789", name: "Alvaro" },
  { email: "mario@test.com", password: "000", name: "Mario" },
];

export function signIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}
