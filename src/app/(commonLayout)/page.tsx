import Footer from "@/components/layout/footer";
import About from "@/components/modules/about/about";
import HowItWorks from "@/components/modules/about/howItWorks";
import WhyChooseUs from "@/components/modules/about/whyChose";
import BannerAndSearch from "@/components/modules/home/bannerAndSearch";
import { Hero } from "@/components/modules/home/hero";
import Policy from "@/components/modules/home/policy";
import AllProductAsCustomer from "@/components/modules/product/allProductAsCustomer";
import { categoryService } from "@/service/category.service";
import { dietsService } from "@/service/diets.service";
import { productsService } from "@/service/products.service";
import React from "react";

export default async function page() {
  // Initial page load এর সময় প্রথম ১০টি প্রোডাক্ট নিয়ে আসছি
  const catRes = await categoryService.getAllCategory();
  const dietsRes = await dietsService.getAllDiets();
  const productsRes = await productsService.getAllProduct(
    "",
    "all",
    "all",
    "1",
    "10",
  );

  const initialProducts = productsRes.data?.data || [];
  const categories = catRes.data?.data || [];
  const diets = dietsRes.data?.data || [];

  return (
    <div className="w-full">
      <BannerAndSearch />
      <Hero />
      <AllProductAsCustomer
        initialProducts={initialProducts}
        categories={categories}
        diets={diets}
      />
      <Policy />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <Footer></Footer>
    </div>
  );
}
