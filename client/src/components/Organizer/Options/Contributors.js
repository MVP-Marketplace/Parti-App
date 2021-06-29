import { Row, Col } from 'react-bootstrap'
import { FiClock, FiEdit2 } from 'react-icons/fi'
import Preview from '../Preview'


function Contributors() {

  const sample = [
    {
      name: 'Contributor 1',
      email: 'email1@email.com'
    },
    {
      name: 'Contributor 2',
      email: 'email2@email.com'
    },
    {
      name: 'Contributor 3',
      email: 'email3@email.com'
    },
    {
      name: 'Contributor 4',
      email: 'email4@email.com'
    },
    {
      name: 'Contributor 5',
      email: 'email5@email.com'
    }
  ]

  const rwStyle = {
    display: 'flex',
    justifyItems: 'center'
  }

  return(
    <Row>
      <Col>
        <Row className="justify-content-md-center">
          <button>Received ( )</button>
          <Col md='auto' />
          <button>Waiting ( )</button>
        </Row>
        <Row className='justify-content-end'>
          <button className='justify-content-end' >Send Reminder to All
            <FiClock size={30} />
          </button>
        </Row>
        <div>
          {sample.map((person) => (
            <Row>
              <Col>
                <h5>{person.name}</h5>
                <p>{person.email}</p>
              </Col>
              <Col>
                <button>
                  <FiEdit2 size={30} />
                </button>
                <button>
                  <FiClock size={30} />
                </button>
              </Col>
            </Row>
          ))}
        </div>
      </Col>
      <Col>
        <Preview />
      </Col>
    </Row>
  )
}

export default Contributors;