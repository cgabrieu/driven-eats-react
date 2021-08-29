import React from 'react';
import "../css/reset.css";
import "../css/styles.css";
import Header from "../components/Header";
import Main from "./Main"
import Revise from "./Revise"
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {

    const [complete, setComplete] = React.useState(false);

    return (
        <Router>
            <Header title="DrivenEats" subtitle="Sua comida em 6 minutos" />
            <Switch>
                <Route exact path="/">
                    <Main setComplete={setComplete} />
                    <Footer complete={complete} />
                </Route>
                <Route path="/revisar" component={Revise} />
            </Switch>
        </Router>
    );
}