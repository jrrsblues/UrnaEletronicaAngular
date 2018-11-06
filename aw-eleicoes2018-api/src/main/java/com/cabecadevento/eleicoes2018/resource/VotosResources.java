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
@RequestMapping("/voto")
public class VotosResources {	

	@Autowired
	private CandidatoService candidatoService;
	
	@Autowired
	private Optional<Candidato> candidato;
	
	private boolean ctrl;
	
	@PostMapping
	public void votar(@RequestBody @Valid Votar votar) {
		 String msg = "";
		 candidato = candidatoService.votar(votar);
		 if(candidato.isPresent()) {
			    msg = candidatoService.somarVoto(candidato);
			    ctrl = true;
		   }else {
			    ctrl = false;
		 }
	}
	
	@GetMapping
	public Mensagem enviaMensagem(Mensagem msg){
		String enviarMensagem;
		if (ctrl) {
			enviarMensagem = "Voto computado de acordo com vossa escolha!";
		  }else {			  
			enviarMensagem = "Atenção! Candidato inexistente!";
        }
		msg.setMsg(enviarMensagem); 
		return msg;
	}
	
}
