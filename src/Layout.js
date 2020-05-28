import React from "react";
import Flux from "react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Input from "./components/Input";
import OrderedList from "./components/OrderedList";


export default class Layout extends Flux.View {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Input} />
                            <Route exact path="/" component={OrderedList} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );

        }
    }