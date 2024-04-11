import React from 'react';

function Header() {
    return (
        <div class="header">
            <nav class="navbar navbar-expand-sm bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#!">Hidden brand</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class=" navbar-nav nav-tabs w-100 d-flex justify-content-end border border-danger">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#!">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Qualifications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#!">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;