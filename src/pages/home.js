import { React, useState } from "react"
import { Link } from "react-router-dom"

import { Card, CardBody, CardHeader, Row, Col, Input, Label, Button } from "reactstrap"

const Home = () => {
  // const
  const initialValues = {
    vals: [
      {
        problemDescription: "",
        problemDiagnostics: "",
        problemStartAfterPhysicalTrauma: "",
        problemStartAfterMentalTrauma: "",
        problemOccurences: "",
        problemTime: [],
        otherReasons: "",
        problemIntensity: ""
      }
    ]
  }

  const checkboxes = [
    {
      name: "not relevant",
      key: "notRelevant",
      label: "Not relevant",
      result: "pass"
    },
    {
      name: "when lying down",
      key: "whenLyingDown",
      label: "When lying down",
      result: "pass"
    },
    {
      name: "when sitting",
      key: "whenStting",
      label: "When sitting",
      result: "pass"
    },
    {
      name: "under standing",
      key: "underStanding",
      label: "Under standing",
      result: "pass"
    },
    {
      name: "in walking",
      key: "inWalking",
      label: "In walking",
      result: "pass"
    }
  ]

  // states
  const [values, setValues] = useState(initialValues)

  // using an array to store the checked items
  const [isChecked, setIsChecked] = useState([])

  // handle changes
  const handleInputChange = (event, index) => {
    const { name, value } = event.target

    setValues((state) => {
      state.vals[index] = {
        ...state.vals[index],
        [name]: value
      }
      return { ...state }
    })
  }

  const handleSingleCheck = (e) => {
    const { name } = e.target
    if (isChecked.includes(name)) {
      return setIsChecked(isChecked.filter((checked_name) => checked_name !== name))
    }
    isChecked.push(name)
    setIsChecked([...isChecked])
  }

  const handleAddClick = () => {
    setValues((state) => {
      state.vals.push(initialValues.vals[0])
      return { ...state }
    })
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Card className="" style={{ width: "60%", height: "70% auto", borderTop: "0" }}>
          <CardHeader
            className="col d-flex flex-column justify-content-center"
            style={{ borderBottom: "0", borderTop: "0" }}>
            <Row>
              <Col xs="12" sm="12" md="12">
                <span className="d-flex justify-content-center align-items-center">
                  <h1 style={{ fontWeight: "700", color: "#5C6B9C" }}>
                    {" "}
                    Pain & Funtioncal Description{" "}
                  </h1>
                </span>
              </Col>
              <Col xs="12" sm="12" md="12">
                <span className="d-flex justify-content-center align-items-center">
                  <h3 className="text-center">
                    The discription of the current situation gives your Optimum <br /> Trainer a
                    picture of and clues to the underlying causes of your <br /> problems
                  </h3>
                </span>
              </Col>
            </Row>
          </CardHeader>

          {values.vals.map((val, index) => {
            return (
              <CardBody
                className="col d-flex justify-content-center"
                key={index}
                style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <Row style={{ height: "100%", width: "100%" }}>
                  <Col
                    xs="12"
                    sm="12"
                    md="12"
                    className="d-flex flex-column justify-content-center align-items-center">
                    <Label>
                      <span>
                        {" "}
                        If you have problems with pain/aches, stiffness, weakness or functional
                        problems, describe <br /> this/these below. (List the symptoms in descending
                        order with the most troublesome first)
                      </span>
                    </Label>

                    <Input
                      name="problemDescription"
                      className=""
                      style={{
                        height: "90%",
                        width: "90%"
                      }}
                      type="textarea"
                      onChange={(e) => {
                        handleInputChange(
                          { target: { name: "problemDescription", value: e.target.value } },
                          index
                        )
                      }}
                    />
                  </Col>

                  <Row className="mt-3">
                    <Col xs="12" sm="6" md="6">
                      <span>Have you been diagnosed with the problem?</span>
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label className="">Not Relevant</Label>
                      <Input
                        name="problemDiagnostics"
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemDiagnostics === "notRelevant"}
                        value="notRelevant"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemDiagnostics", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label>Yes</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemDiagnostics === "yes"}
                        value="yes"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemDiagnostics", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label>No</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemDiagnostics === "no"}
                        value="no"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemDiagnostics", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col xs="12" sm="6" md="6" className="mt-3">
                      <span>Did the problem start after a physical trauma?</span>
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label className="">Not Relevant</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemStartAfterPhysicalTrauma === "notRelevant"}
                        value="notRelevant"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemStartAfterPhysicalTrauma",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label>Yes</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemStartAfterPhysicalTrauma === "yes"}
                        value="yes"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemStartAfterPhysicalTrauma",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="2" md="2">
                      <Label>No</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemStartAfterPhysicalTrauma === "no"}
                        value="no"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemStartAfterPhysicalTrauma",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col xs="12" sm="12" md="12" className="mt-3">
                      <span>How often do you experience the problem?</span>
                    </Col>
                    <Col xs="12" sm="3" md="3">
                      <Label className="">Not Relevant</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemOccurences === "notRelevant"}
                        value="notRelevant"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemOccurences",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="3" md="3">
                      <Label>Daily</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemOccurences === "daily"}
                        value="daily"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemOccurences",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="3" md="3">
                      <Label>Several times/week</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemOccurences === "several times/week"}
                        value="several times/week"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemOccurences",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="12" sm="3" md="3">
                      <Label>A few times/month</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemOccurences === "few times/month"}
                        value="few times/month"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: {
                                name: "problemOccurences",
                                value: e.target.value
                              }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                  </Row>

                  <Col xs="12" sm="3" md="3">
                    <Label>A few times/year</Label>
                    <Input
                      className=""
                      style={{
                        marginLeft: "10px"
                      }}
                      type="radio"
                      checked={val.problemOccurences === "few times/year"}
                      value="few times/year"
                      onChange={(e) => {
                        handleInputChange(
                          {
                            target: {
                              name: "problemOccurences",
                              value: e.target.value
                            }
                          },
                          index
                        )
                      }}
                    />
                  </Col>

                  <Row className="mt-2">
                    <Col xs="12" sm="12" md="12" className="mt-3">
                      <span>When do you experience the problem?</span>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                      <Row>
                        {checkboxes.map((item) => {
                          return (
                            <Col xs="12" sm="12" md="12" key={item.key}>
                              <Label>{item.label}</Label>
                              <Input
                                style={{
                                  marginLeft: "10px"
                                }}
                                type="checkbox"
                                name={item.name}
                                checked={isChecked.includes(item.name)}
                                onChange={(e) => {
                                  handleSingleCheck(e, index)
                                }}
                              />
                            </Col>
                          )
                        })}
                      </Row>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                      <Input
                        name="otherReasons"
                        className=""
                        style={{
                          height: "65%",
                          width: "100%"
                        }}
                        type="textarea"
                        placeholder="Other? For example in rotations, side bends, wing stairs, when working with the arms above the head."
                        onChange={(e) => {
                          handleInputChange(
                            { target: { name: "otherReasons", value: e.target.value } },
                            index
                          )
                        }}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col xs="12" sm="12" md="12" className="mt-3">
                      <span>
                        How intense is the experience of the problem on average on a 1-10 scale?
                      </span>
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label className="">1</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "1"}
                        value="1"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>2</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "2"}
                        value="2"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>3</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "3"}
                        value="3"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>4</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "4"}
                        value="4"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>5</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "5"}
                        value="5"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>6</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "6"}
                        value="6"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>7</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "7"}
                        value="7"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>8</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "8"}
                        value="8"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>9</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "9"}
                        value="9"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                    <Col xs="4" sm="1" md="1">
                      <Label>10</Label>
                      <Input
                        className=""
                        style={{
                          marginLeft: "10px"
                        }}
                        type="radio"
                        checked={val.problemIntensity === "10"}
                        value="10"
                        onChange={(e) => {
                          handleInputChange(
                            {
                              target: { name: "problemIntensity", value: e.target.value }
                            },
                            index
                          )
                        }}
                      />
                    </Col>
                  </Row>
                </Row>
              </CardBody>
            )
          })}
          <Row className="mt-3 ">
            <Col xs="4" sm="4" md="4">
              <div>
                <hr />
              </div>
            </Col>
            <Col xs="4" sm="4" md="4">
              <div className=" d-flex justify-content-center align-items-center">
                <Button className="bg-success" style={{ width: "50%" }} onClick={handleAddClick}>
                  Add
                </Button>
              </div>
            </Col>
            <Col xs="4" sm="4" md="4">
              <div>
                <hr />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="6" sm="6" md="6" className="d-flex justify-content-end">
              <Button style={{ width: "50%", backgroundColor: "blue" }} disabled onClick={handleAddClick}>
                Back
              </Button>
            </Col>
            <Col xs="6" sm="6" md="6" className="d-flex justify-content-start">
              <Link
                to="/summary"
                state={{ data: values, checkboxes: isChecked }}
                style={{ width: "50%", backgroundColor: "blue", textAlign: 'center' }}>
                <Button style={{ width: "50%",backgroundColor: "blue", border: "0", borderRadius: "10%" }} >Next</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default Home
