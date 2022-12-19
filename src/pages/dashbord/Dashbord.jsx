import React, { useState } from "react";
import "./dishboard.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Select,
  Text,
} from "@chakra-ui/react";
import PvtNavbar from "../../compounts/PvtNavbar/PvtNavbar";

function Dashbord() {
  const [data, setdata] = useState({
    name: "",
    survey: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };

  const submit = () => {
    let storedata = JSON.parse(localStorage.getItem("dashbord_data")) || [];

    storedata.push(data);
    localStorage.setItem("dashbord_data", JSON.stringify(storedata));
    setdata({
      name: "",
      survey: "",
    });
    onClose();
  };

  // console.log("faihahfoahd")

  return (
    <div>
      <PvtNavbar/>
      
      <p>
        <b> Create a Survey </b>
      </p>
      <h2>How would you like to get started?</h2>
      <div className="boxss">
        <div className="img">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzlEOUQ5RCIgZD0iTTEwLjY2NyAxNy4zMzNhNS4zMzMgNS4zMzMgMCAxIDAgMC0xMC42NjYgNS4zMzMgNS4zMzMgMCAwIDAgMCAxMC42NjZ6TTEwLjY2NyA1OC42NjdhNS4zMzMgNS4zMzMgMCAxIDAgMC0xMC42NjcgNS4zMzMgNS4zMzMgMCAwIDAgMCAxMC42Njd6TTUzLjMzMyA1OC42NjdhNS4zMzMgNS4zMzMgMCAxIDAgMC0xMC42NjcgNS4zMzMgNS4zMzMgMCAwIDAgMCAxMC42Njd6Ii8+PHBhdGggZmlsbD0iI0IzREFCRCIgZD0iTTI4LjA2NCA0NC41NTRhOC45NDMgOC45NDMgMCAxIDAgMC0xNy44ODcgOC45NDMgOC45NDMgMCAwIDAgMCAxNy44ODd6Ii8+PHBhdGggc3Ryb2tlPSIjNDA0MDQwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNTQuNDM1IDkuNTcyYTQuODE5IDQuODE5IDAgMCAwLTYuODE1IDBMMzAuNDUzIDI2Ljg2OGwtMi42NjYgOS4zMzQgOS4zMzMtMi42NjcgMTcuMzE1LTE3LjE0OGE0LjgyIDQuODIgMCAwIDAgMC02LjgxNXYweiIvPjxwYXRoIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNDAgMTAuNjY3SDEyQTEuMzMzIDEuMzMzIDAgMCAwIDEwLjY2NyAxMnY0MEExLjMzMyAxLjMzMyAwIDAgMCAxMiA1My4zMzNoNDBBMS4zMzMgMS4zMzMgMCAwIDAgNTMuMzMzIDUyVjI0Ii8+PC9zdmc+"
            alt=""
            style={{ width: "10em" }}
            onClick={onOpen}
          />
          <p style={{ color: "green" }}>
            <b>Start your survey from scratch</b>
          </p>
          <p style={{ color: "gray" }}>Build your survey from scratch.</p>
        </div>
        <div className="img">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg5IiBoZWlnaHQ9IjE4OSIgdmlld0JveD0iMCAwIDE4OSAxODkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03OS40MDQ4IDk2Ljc5NTlINjkuNDE0OUM2MS42MDIxIDk2LjgxNTMgNTQuMTE3IDk5LjkzNzUgNDguNjA2MiAxMDUuNDc2QzQzLjA5NTUgMTExLjAxNCA0MC4wMTA0IDExOC41MTQgNDAuMDI5OCAxMjYuMzI3VjEyNi4zMjciIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUwLjM4MiA4Ny4yNzI5QzE0Ny42NCA5MC4yNzU5IDE0NC4zMDEgOTIuNjczOCAxNDAuNTggOTQuMzEzNUMxMzYuODU4IDk1Ljk1MzIgMTMyLjgzNiA5Ni43OTg2IDEyOC43NjkgOTYuNzk1OEgxMDMuMDMiIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNODIuNjg3NSAzNS40Mzc1SDEyOC43N0MxMzYuMzYzIDM1LjI0NCAxNDMuNzI0IDM4LjA3MjUgMTQ5LjIzMyA0My4zMDE5QzE1NC43NDMgNDguNTMxMiAxNTcuOTUyIDU1LjczMzcgMTU4LjE1NSA2My4zMjcyVjYzLjMyNzIiIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAwLjgzNCAxMTAuMzUxQzEwOC4zMiAxMTAuMzUxIDExNC4zODkgMTA0LjI4MiAxMTQuMzg5IDk2Ljc5NjFDMTE0LjM4OSA4OS4zMTAyIDEwOC4zMiA4My4yNDE3IDEwMC44MzQgODMuMjQxN0M5My4zNDgzIDgzLjI0MTcgODcuMjc5OCA4OS4zMTAyIDg3LjI3OTggOTYuNzk2MUM4Ny4yNzk4IDEwNC4yODIgOTMuMzQ4MyAxMTAuMzUxIDEwMC44MzQgMTEwLjM1MVoiIGZpbGw9IiM5RDlEOUQiLz4KPHBhdGggZD0iTTQwLjU3NTYgMTQxLjA5MUM0OC4xMjQxIDE0MS4wOTEgNTQuMjQzNCAxMzQuOTcxIDU0LjI0MzQgMTI3LjQyM0M1NC4yNDM0IDExOS44NzQgNDguMTI0MSAxMTMuNzU1IDQwLjU3NTYgMTEzLjc1NUMzMy4wMjcgMTEzLjc1NSAyNi45MDc3IDExOS44NzQgMjYuOTA3NyAxMjcuNDIzQzI2LjkwNzcgMTM0Ljk3MSAzMy4wMjcgMTQxLjA5MSA0MC41NzU2IDE0MS4wOTFaIiBmaWxsPSIjOUQ5RDlEIi8+CjxwYXRoIGQ9Ik0xMzcuODEyIDE4Mi41NDhDMTUzLjAzNSAxODIuNTQ4IDE2NS4zNzUgMTcwLjIwOCAxNjUuMzc1IDE1NC45ODVDMTY1LjM3NSAxMzkuNzYzIDE1My4wMzUgMTI3LjQyMyAxMzcuODEyIDEyNy40MjNDMTIyLjU5IDEyNy40MjMgMTEwLjI1IDEzOS43NjMgMTEwLjI1IDE1NC45ODVDMTEwLjI1IDE3MC4yMDggMTIyLjU5IDE4Mi41NDggMTM3LjgxMiAxODIuNTQ4WiIgZmlsbD0iIzZCQzlGNSIvPgo8cGF0aCBkPSJNMTU3LjU1NSA4MC44ODI2QzE2NS4xMDQgODAuODgyNiAxNzEuMjIzIDc0Ljc2MzMgMTcxLjIyMyA2Ny4yMTQ3QzE3MS4yMjMgNTkuNjY2MiAxNjUuMTA0IDUzLjU0NjkgMTU3LjU1NSA1My41NDY5QzE1MC4wMDcgNTMuNTQ2OSAxNDMuODg3IDU5LjY2NjIgMTQzLjg4NyA2Ny4yMTQ3QzE0My44ODcgNzQuNzYzMyAxNTAuMDA3IDgwLjg4MjYgMTU3LjU1NSA4MC44ODI2WiIgZmlsbD0iIzlEOUQ5RCIvPgo8cGF0aCBkPSJNNzQuODEyNSA2OC41NzlDNzQuODEyNSA1NS41NzQ2IDYyLjQ3MjQgNDUuMDMyNyA0Ny4yNSA0NS4wMzI3QzMyLjAyNzYgNDUuMDMyNyAxOS42ODc1IDU1LjU3NDYgMTkuNjg3NSA2OC41NzkiIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNTkuNjU1MSAyMS45NTA4QzU5LjY1NTUgMjEuMTcxIDU5LjU3OTkgMjAuMzkyOSA1OS40Mjk1IDE5LjYyNzdDNTguNzY4OCAxNi43ODA4IDU3LjE3MjYgMTQuMjM3NiA1NC44OTYxIDEyLjQwNDdDNTIuNjE5NyAxMC41NzE5IDQ5Ljc5NDQgOS41NTUxNyA0Ni44NzIxIDkuNTE3MjJDNDMuOTQ5NyA5LjQ3OTI2IDQxLjA5OSAxMC40MjIyIDM4Ljc3NTcgMTIuMTk1M0MzNi40NTI0IDEzLjk2ODQgMzQuNzkwNyAxNi40NjkzIDM0LjA1NjMgMTkuMjk4MUMzMy44NTk3IDIwLjE2ODcgMzMuNzYwOCAyMS4wNTg0IDMzLjc2MTQgMjEuOTUwOEMzMy44MzA3IDI1LjMxNjEgMzUuMjMzNCAyOC41MTYxIDM3LjY2MTEgMzAuODQ3NkM0MC4wODg4IDMzLjE3OTEgNDMuMzQyOSAzNC40NTEzIDQ2LjcwODIgMzQuMzg0N0M1MC4wNzM1IDM0LjQ1MTIgNTMuMzI3NiAzMy4xNzkgNTUuNzU1MyAzMC44NDc1QzU4LjE4MyAyOC41MTYgNTkuNTg1NyAyNS4zMTYgNTkuNjU1MSAyMS45NTA4VjIxLjk1MDhaIiBzdHJva2U9IiM0MDQwNDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTQ4LjYzNTYgMTQ3LjIwOEM1MS4xMjMyIDE1MC4zNTIgNTQuMjc2OSAxNTIuOTA2IDU3Ljg2OTggMTU0LjY4NkM2MS40NjI3IDE1Ni40NjYgNjUuNDA1NCAxNTcuNDI3IDY5LjQxNDIgMTU3LjVIMTAyLjczNyIgc3Ryb2tlPSIjNDA0MDQwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMjQuMjk1IDE0OC42MTNMMTM4LjMzNiAxNjIuNjU0TDE2MS43NDEgMTI5Ljg5IiBzdHJva2U9IiM0MDQwNDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
            alt=""
            onClick={onOpen}
          />
          <p style={{ color: "blue" }}>
            {" "}
            <b>Start your survey from our quick start template </b>
          </p>
          <p style={{ color: "gray" }}>
            Use a template to see the question types in action. Edit the survey
            and add questions to meet your needs.
          </p>
        </div>
      </div>

      <div className="modal">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <b> New Survey </b>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={2}>
                <Text> Survey Title </Text>
                <Input
                  placeholder="Survey name"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  type="text"
                  value={data.name}
                  onChange={changeHandle}
                  name="name"
                />

                <Text> Survey Category Optional </Text>

                <Select
                  placeholder="Survey"
                  onChange={changeHandle}
                  value={data.survey}
                  name="survey"
                >
                  <option>Survey Cetogary</option>
                  <option>Communation or valunteer feedback</option>
                  <option>Customer Feedback</option>
                  <option>Concept, product or add testing</option>
                  <option>Brand Tracking or awareness</option>
                  <option>General market research</option>
                  <option>Employee engagement</option>
                  <option>Employee performance</option>
                  <option>General employee feedback</option>
                  <option>Event registration</option>
                  <option>Event feedback</option>
                  <option>Academic research</option>
                  <option>Course or parent feedback</option>
                  <option>Quiz</option>
                  <option>Other</option>
                  <option>From or application</option>
                  <option>Vote or poll</option>
                </Select>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="green" onClick={submit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Dashbord;
