import AllDiets from "@/components/modules/admin/diets/allDiets";
import { CreateDiets } from "@/components/modules/admin/diets/createDiets";
import { dietsService } from "@/service/diets.service";
import React from "react";

export default async function page() {
  const { data } = await dietsService.getAllDiets();

//   console.log(data);
  return (
    <div>
      <CreateDiets />
      <AllDiets data={data?.data?.diets} />
    </div>
  );
}
