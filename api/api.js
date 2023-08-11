export async function GetGuidelines(payload) {
    const url =
      `https://2t3eh2eevg.execute-api.us-east-1.amazonaws.com/develop/getdiseasewithguidelines`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
      }
      return json;
    } catch (error) {
      // throw new Error("Failed to fetch API");
      return error;
    }
  }