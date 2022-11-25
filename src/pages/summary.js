import { React } from "react"
import { useLocation, Link } from "react-router-dom"

import DataTable from "react-data-table-component"
import { Card, CardBody, CardHeader, Row, Col, Button } from "reactstrap"

const Summary = () => {
  const location = useLocation()
  const { data, checkboxes } = location.state

  const columns = [
    {
      name: "Problem Description",
      selector: "problemDescription",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Problem Diagnostics",
      minWidth: "150px",
      selector: "problemDiagnostics",
      sortable: true
    },
    {
      name: "Did Problem Start After Physical Trauma?",
      selector: "problemStartAfterPhysicalTrauma",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Did Problem Start After Mental Trauma?",
      selector: "problemStartAfterMentalTrauma",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Problem Occurences",
      selector: "problemOccurences",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "When do you experience problems?",
      selector: "otherReasons",
      sortable: true,
      minWidth: "150px",
      cell: (row) => (
        <div className="d-flex justify-content-center align-items-center">
          {`${row.otherReasons} ${checkboxes.map((val) => val)}`}
        </div>
      )
    },
    {
      name: "Problem Intensity",
      selector: "problemIntensity",
      sortable: true,
      minWidth: "150px"
    }
  ]

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

          <CardBody>
            {data.vals && data.vals.length ? (
              <DataTable
                className="Post"
                columns={columns}
                data={data.vals}
                responsive={true}
                fixedHeader
              />
            ) : (
              <div>No data available</div>
            )}
          </CardBody>

          <Row className="mt-3">
            <Col xs="6" sm="6" md="6" className="d-flex justify-content-end">
              <Link
                to="/"
                style={{ width: "50%", backgroundColor: "blue", textAlign: "center" }}>
                <Button style={{ width: "50%", backgroundColor: "blue", border: "0" }}>Back</Button>
              </Link>
            </Col>
            <Col xs="6" sm="6" md="6" className="d-flex justify-content-start">
              <Button style={{ width: "50%", backgroundColor: "blue", border: "0" }} disabled>
                Next
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default Summary
