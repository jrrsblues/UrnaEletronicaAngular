package com.cabecadevento.eleicoes2018.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cabecadevento.eleicoes2018.model.Candidato;


public interface Candidatos extends JpaRepository<Candidato, Long> {

}
