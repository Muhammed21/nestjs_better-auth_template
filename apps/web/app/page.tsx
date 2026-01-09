"use client";

export default function Home() {
  const signIn = async () => {
    const res = await fetch("http://localhost:8080/api/v1/auth/sign-in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        provider: "figma",
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data?.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={signIn}>Se connecter avec Figma</button>
    </div>
  );
}
