/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Trip } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TripUpdateForm(props) {
  const {
    id: idProp,
    trip,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Destination: "",
    LeaveDate: "",
    HomeDate: "",
    TripName: "",
  };
  const [Destination, setDestination] = React.useState(
    initialValues.Destination
  );
  const [LeaveDate, setLeaveDate] = React.useState(initialValues.LeaveDate);
  const [HomeDate, setHomeDate] = React.useState(initialValues.HomeDate);
  const [TripName, setTripName] = React.useState(initialValues.TripName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tripRecord
      ? { ...initialValues, ...tripRecord }
      : initialValues;
    setDestination(cleanValues.Destination);
    setLeaveDate(cleanValues.LeaveDate);
    setHomeDate(cleanValues.HomeDate);
    setTripName(cleanValues.TripName);
    setErrors({});
  };
  const [tripRecord, setTripRecord] = React.useState(trip);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Trip, idProp) : trip;
      setTripRecord(record);
    };
    queryData();
  }, [idProp, trip]);
  React.useEffect(resetStateValues, [tripRecord]);
  const validations = {
    Destination: [],
    LeaveDate: [],
    HomeDate: [],
    TripName: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Destination,
          LeaveDate,
          HomeDate,
          TripName,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Trip.copyOf(tripRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TripUpdateForm")}
      {...rest}
    >
      <TextField
        label="Destination"
        isRequired={false}
        isReadOnly={false}
        value={Destination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Destination: value,
              LeaveDate,
              HomeDate,
              TripName,
            };
            const result = onChange(modelFields);
            value = result?.Destination ?? value;
          }
          if (errors.Destination?.hasError) {
            runValidationTasks("Destination", value);
          }
          setDestination(value);
        }}
        onBlur={() => runValidationTasks("Destination", Destination)}
        errorMessage={errors.Destination?.errorMessage}
        hasError={errors.Destination?.hasError}
        {...getOverrideProps(overrides, "Destination")}
      ></TextField>
      <TextField
        label="Leave date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={LeaveDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Destination,
              LeaveDate: value,
              HomeDate,
              TripName,
            };
            const result = onChange(modelFields);
            value = result?.LeaveDate ?? value;
          }
          if (errors.LeaveDate?.hasError) {
            runValidationTasks("LeaveDate", value);
          }
          setLeaveDate(value);
        }}
        onBlur={() => runValidationTasks("LeaveDate", LeaveDate)}
        errorMessage={errors.LeaveDate?.errorMessage}
        hasError={errors.LeaveDate?.hasError}
        {...getOverrideProps(overrides, "LeaveDate")}
      ></TextField>
      <TextField
        label="Home date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={HomeDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Destination,
              LeaveDate,
              HomeDate: value,
              TripName,
            };
            const result = onChange(modelFields);
            value = result?.HomeDate ?? value;
          }
          if (errors.HomeDate?.hasError) {
            runValidationTasks("HomeDate", value);
          }
          setHomeDate(value);
        }}
        onBlur={() => runValidationTasks("HomeDate", HomeDate)}
        errorMessage={errors.HomeDate?.errorMessage}
        hasError={errors.HomeDate?.hasError}
        {...getOverrideProps(overrides, "HomeDate")}
      ></TextField>
      <TextField
        label="Trip name"
        isRequired={false}
        isReadOnly={false}
        value={TripName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Destination,
              LeaveDate,
              HomeDate,
              TripName: value,
            };
            const result = onChange(modelFields);
            value = result?.TripName ?? value;
          }
          if (errors.TripName?.hasError) {
            runValidationTasks("TripName", value);
          }
          setTripName(value);
        }}
        onBlur={() => runValidationTasks("TripName", TripName)}
        errorMessage={errors.TripName?.errorMessage}
        hasError={errors.TripName?.hasError}
        {...getOverrideProps(overrides, "TripName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || trip)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || trip) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
