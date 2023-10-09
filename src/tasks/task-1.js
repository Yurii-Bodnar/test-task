import { UnitOfMeasurementFromCm, UnitOfMeasurementToCm } from "../db.js";

const convert = ({ distance, convertTo }) => {
  if (distance.value <= 0) {
    throw Error("The value must be greater than 0");
  }
  if (
    !distance ||
    !distance.value ||
    !distance.unit ||
    !convertTo ||
    !UnitOfMeasurementFromCm[convertTo] ||
    !UnitOfMeasurementToCm[distance.unit]
  ) {
    throw Error(
      "Please enter correct data. Example: { distance: { unit: 'm', value: 0.5 }, convertTo: 'ft' }.The data 'unit' and 'convertTo' can only be: m , cm, in, ft, mm, yd, km."
    );
  }

  let valueUnitToCm = UnitOfMeasurementToCm[distance.unit];
  let valueUnitFromCm = UnitOfMeasurementFromCm[convertTo];
  const res = valueUnitToCm * distance.value * valueUnitFromCm;
  return { unit: convertTo, value: res.toFixed(2) };
};
console.log(
  "TASK-1: ",
  convert({ distance: { unit: "m", value: 2 }, convertTo: "ft" })
);
