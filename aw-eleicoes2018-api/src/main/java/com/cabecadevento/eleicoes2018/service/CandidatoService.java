package com.cabecadevento.eleicoes2018.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cabecadevento.eleicoes2018.model.Candidato;
import com.cabecadevento.eleicoes2018.model.Votar;
import com.cabecadevento.eleicoes2018.repository.Candidatos;
import com.cabecadevento.eleicoes2018.resource.CandidatosResources;

@Service
public class CandidatoService {
	
	@Autowired
	private Candidatos candidatos;
	
	@Autowired
	private CandidatosResources resources;
	
	public Candidato cadastrar(Candidato candidato) {
		return candidatos.save(candidato);
	}
	
	public Optional<Candidato> votar(Votar votar) {
		return candidatos.findById(votar.getCandidatoSelecionado());
	}
	
	public Optional<Candidato> retornaCandidato(long id) {
		return candidatos.findById(id);
	}
	
	public String somarVoto(Optional<Candidato> candidato) {
		 String msg = "";
 		 int voto = candidato.get().getVotos();
		 voto++;
		 candidato.get().setVotos(voto);
		 Candidato candidato2 = computaVoto(candidato);
		 if(candidato2.getVotos()>0) {
			 msg = "Voto computado com sucesso!";
		  }else {
			 msg = "Erro, por gentileza acionar o mesário da sessão!";
		  }
		 return msg;
	}
	
	public Candidato computaVoto(Optional<Candidato> candidato) {
		Candidato candidato1 = candidato.get();
		candidato1 = candidatos.save(candidato1);
		return candidato1;
	}
	
	public long retornaIdMaisVotado() {
		int votado = 0;
		long id = 0;
		List<Candidato> lista = new ArrayList<Candidato>();
		lista = resources.listar();
		for(Candidato valor : lista) {  
		      if(valor.getVotos() > votado) {
		    	  votado = valor.getVotos();
		    	  id = valor.getId();
		      }
		}
		return id;
	}

}
	