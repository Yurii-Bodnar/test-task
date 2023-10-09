import { dataForSortingAndSelection } from "../db.js";

const excludeData = (conditionExpression, data) => {
  let result = data;
  for (let expr of conditionExpression) {
    result = result.filter((el) => {
      for (let condKey of Object.keys(expr)) {
        if (el[condKey] !== expr[condKey]) {
          return true;
        }
      }
      return false;
    });
  }
  return result;
};

const includeData = (conditionExpression, data) => {
  let result = [];
  for (let expr of conditionExpression) {
    let findIncluded = data.filter((el) => {
      for (let condKey of Object.keys(expr)) {
        if (el[condKey] !== expr[condKey]) {
          return false;
        }
      }
      return true;
    });
    result = [...result, ...findIncluded];
  }
  result = [...new Set(result)];
  return result;
};

const sortBy = (sortValues, dataResult) => {
  let result = dataResult;
  result.sort((a, b) => {
    for (let i = 0; i <= sortValues.length; i++) {
      const arrOneItemInDataRes = Object.keys(dataResult[i]);
      if (!arrOneItemInDataRes.includes(sortValues[i])) {
        throw Error(
          `It is not possible to sort by this property "${sortValues[i]}" because it does not exist`
        );
      }

      if (a[sortValues[i]] === b[sortValues[i]]) {
        continue;
      }
      if (a[sortValues[i]] !== b[sortValues[i]]) {
        if (typeof a[sortValues[i]] === "string") {
          return a[sortValues[i]].localeCompare(b[sortValues[i]]);
        }
        if (
          typeof a[sortValues[i]] === "number" ||
          typeof b[sortValues[i]] === "boolean"
        ) {
          return a[sortValues[i]] - b[sortValues[i]];
        }
      }
    }
  });
  return result;
};

const errorHandler = (data, condition, conditionKeys) => {
  let errorForCondition = "There is no provision for data manipulation!";
  if (!condition) {
    throw Error(errorForCondition);
  }
  if (!data) {
    throw Error("There is no data to manipulate!");
  }

  if (conditionKeys.length === 0) {
    throw Error(errorForCondition);
  }
};

const sortingAndSelection = ({ data, condition }) => {
  let result = data;
  const conditionKeys = Object.keys(condition);

  errorHandler(data, condition, conditionKeys);

  for (let conditionValue of conditionKeys) {
    let conditionExpression = condition[conditionValue];
    if (conditionValue === "exclude") {
      result = excludeData(conditionExpression, data);
    }
    if (conditionValue === "include") {
      result = includeData(conditionExpression, data);
    }
    if (conditionValue === "sortBy") {
      result = sortBy(conditionExpression, result);
    }
  }

  return { result };
};

console.log(
  "TASK-2: ",
  sortingAndSelection({
    data: dataForSortingAndSelection,
    condition: {
      exclude: [{ user: "robert@mail.com", disabled: true }, { rating: 25 }],
      sortBy: ["rating", "disabled", "name"],
    },
  })
);
