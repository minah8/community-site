package project.blog.community.project.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.blog.community.project.dto.request.RpsRequestDTO;
import project.blog.community.project.service.GameService;

@Controller
@RequiredArgsConstructor
@RequestMapping("/game")
@Slf4j
public class GameController {

    private final GameService gameService;

    // 홈페이지 - 가위바위보 view
    @GetMapping("/rps")
    public String rpsList() {
        log.info("/game/rps: GET");

        // /WEB-INF/views/~~~~~.jsp
        return "home/gamerps";
    }


    // 가위바위보 게임 (비동기)
    @PostMapping("/rps/start")
    @ResponseBody
    public ResponseEntity<String> rpsGame(@RequestBody RpsRequestDTO dto) {
        // bp: 유저가 입력한 가위바위보를 위한 베팅 금액
        log.info("/game/rps/start: POST, {}", dto.toString());
        // scissors: 가위, rock: 바위, paper: 보


        // 가위바위보 결과
        String result = gameService.rpsPointCalc(dto);
        System.out.println(result);


        return ResponseEntity.ok().body(result);

    }

    // 로또 페이지
    @GetMapping("/lotto")
    public String lotto() {
        log.info("/game/lotto: GET");

        // /WEB-INF/views/~~~~~.jsp
        return "game/lotto";
    }

}