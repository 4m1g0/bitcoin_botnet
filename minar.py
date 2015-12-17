#!/usr/bin/python
import hashlib

hashM = "sadj129ah29uasdj1k3l92joasd-123ishdia9123-123ijq"
targetM = 4

def zeros(target):
	i=0
	resultado ="0"
	while i < target-1:
		resultado +="0"	
		i+=1
	return resultado

def minar(hashMinar,target):
	nonce=0
	while True:
		resultado = hashMinar+ "-" + str(nonce)
		solucion= hashlib.sha256(resultado).hexdigest()
		numeros = solucion[0:target]
		ceros = zeros(target)

		print "numeros "+ numeros +" vs " + "nonce " + str(nonce) 
		
		if numeros == ceros:
			print "congratulations hash: " + resultado + "es la clave" 
			print "cuya solucion es " +  solucion 
			break

		nonce +=1
		
def main():
	minar(hashM,targetM)
	
main()

