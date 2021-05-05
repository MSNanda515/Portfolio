import react, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyStyle.css'
function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <nav class="navbar navbar-default">
                        <a class="navbar-brand text-dark" href="#"><strong>Meharpreet Singh Nanda</strong></a>
                        <ul class="nav navbar-nav navbar-right">
                            <Row>
                                <li class="item"><a>page 1</a></li>
                                <li class="item"><a>page 2</a></li>
                            </Row>
                        </ul>
                    </nav>
                </Row>
                
            </Container>
        
        </div>
    )   
}

export default Header