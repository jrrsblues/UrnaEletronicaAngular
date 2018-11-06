package com.cabecadevento.eleicoes2018.resource;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cabecadevento.eleicoes2018.model.Candidato;
import com.cabecadevento.eleicoes2018.model.Mensagem;
import com.cabecadevento.eleicoes2018.model.Votar;
import com.cabecadevento.eleicoes2018.service.CandidatoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/maisvotado")
public class MaisVotadoResources {	

	@Autowired
	private CandidatoService candidatoService;
	
	@Autowired
	private Optional<Candidato> candidato;
	
	@GetMapping
	public Candidato maisVotado(){
		candidato = candidatoService.retornaCandidato(candidatoService.retornaIdMaisVotado());
		candidato.get().getNomeurna();
		return candidato.get();
	}
	
}
