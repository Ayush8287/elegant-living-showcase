export const fetcher = async (url: string) => {
    const fullUrl = `${import.meta.env.VITE_API_BACKEND_URL}${url}`;
  
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
  
    const res = await fetch(fullUrl, {
      method: 'GET',
      headers,
      credentials: 'include',
    });
  
    if (!res.ok) {
      const errorDetails = await res.text();
      throw new Error(`Fetch error (${res.status}): ${errorDetails}`);
    }
  
    return res.json();
  };
  