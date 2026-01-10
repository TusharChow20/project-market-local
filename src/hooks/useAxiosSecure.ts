// src/hooks/useAxiosSecure.ts
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { axiosSecure } from "@/lib/axios";

const useAxiosSecure = () => {
  const router = useRouter();
  
  useEffect(() => {
    // REQUEST INTERCEPTOR - Just log requests for now
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        console.log("📤 Request:", config.method?.toUpperCase(), config.url);
        return config;
      },
      (error) => {
        console.error("❌ Request Error:", error);
        return Promise.reject(error);
      }
    );

    // RESPONSE INTERCEPTOR - Handle errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        console.log("✅ Response:", response.status, response.data);
        return response;
      },
      (error) => {
        console.error("❌ Response Error:", error.response?.status, error.message);
        const statusCode = error.response?.status;
        
        // Handle 401/403 
        if (statusCode === 401 || statusCode === 403) {
          router.push("/login");
        }
        
        return Promise.reject(error);
      }
    );

    // CLEANUP
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [router]);

  return axiosSecure;
};

export default useAxiosSecure;